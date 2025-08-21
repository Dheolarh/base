import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import ActionMenu from 'components/common/ActionMenu';
import { formatNumber } from 'helpers/formatNumber';
import { rows } from 'data/recentOrdersData';

const actions = [
  {
    id: 1,
    icon: 'solar:eye-bold',
    title: 'View Details',
  },
  {
    id: 2,
    icon: 'solar:printer-bold',
    title: 'Print Invoice',
  },
  {
    id: 3,
    icon: 'solar:pen-bold',
    title: 'Update Status',
  },
];

const getOrderStatus = (pending: number, canceled: number, delivered: number) => {
  if (canceled > 0) return { label: 'Canceled', color: 'error' as const };
  if (delivered > 0) return { label: 'Delivered', color: 'success' as const };
  if (pending > 0) return { label: 'Pending', color: 'warning' as const };
  return { label: 'Processing', color: 'primary' as const };
};

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: '__check__',
    headerName: '',
    width: 40,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'id',
    headerName: 'Order ID',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600} color="primary.main">
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'customer',
    headerName: 'Customer',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 180,
    renderCell: () => (
      <Stack>
        <Typography variant="body2" fontWeight={600}>
          John Doe
        </Typography>
        <Typography variant="caption" color="text.secondary">
          john.doe@email.com
        </Typography>
      </Stack>
    ),
  },
  {
    field: 'totalOrder',
    headerName: 'Items',
    editable: false,
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 80,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'balance',
    headerName: 'Total Amount',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600}>
        {formatNumber(params.value, {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })}
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: false,
    align: 'center',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      const status = getOrderStatus(params.row.pending, params.row.canceled, params.row.delevered);
      return (
        <Chip 
          label={status.label} 
          size="small" 
          color={status.color}
          sx={{ borderRadius: 1.5, minWidth: 80 }}
        />
      );
    },
  },
  {
    field: 'date',
    headerName: 'Order Date',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 120,
    renderCell: () => (
      <Typography variant="body2">
        {new Date().toLocaleDateString()}
      </Typography>
    ),
  },
  {
    field: 'action',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    sortable: false,
    flex: 1,
    minWidth: 80,
    renderHeader: () => <ActionMenu actions={actions} />,
    renderCell: () => <ActionMenu actions={actions} />,
  },
];

interface OrdersTableProps {
  searchText: string;
}

const OrdersTable = ({ searchText }: OrdersTableProps) => {
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={60}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      checkboxSelection
      pageSizeOptions={[10, 20, 50]}
    />
  );
};

export default OrdersTable;