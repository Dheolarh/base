import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
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
    title: 'View Profile',
  },
  {
    id: 2,
    icon: 'solar:pen-bold',
    title: 'Edit',
  },
  {
    id: 3,
    icon: 'solar:chat-round-dots-bold',
    title: 'Message',
  },
];

const customerNames = [
  'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown',
  'Emily Davis', 'Chris Miller', 'Lisa Garcia', 'Tom Anderson', 'Amy Taylor'
];

const getCustomerStatus = (orders: number) => {
  if (orders > 200) return { label: 'VIP', color: 'primary' as const };
  if (orders > 100) return { label: 'Premium', color: 'secondary' as const };
  if (orders > 50) return { label: 'Regular', color: 'success' as const };
  return { label: 'New', color: 'warning' as const };
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
    field: 'customer',
    headerName: 'Customer',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 200,
    renderCell: (params) => {
      const idString = String(params.row.id);
      const lastDigit = idString.slice(-1);
      const customerName = customerNames[parseInt(lastDigit) % customerNames.length];
      const email = customerName.toLowerCase().replace(' ', '.') + '@email.com';
      
      return (
        <Stack height={1} spacing={1.5} alignItems="center" justifyContent="flex-start">
          <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
            {customerName.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Stack>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {customerName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {email}
            </Typography>
          </Stack>
        </Stack>
      );
    },
  },
  {
    field: 'totalOrder',
    headerName: 'Total Orders',
    editable: false,
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'balance',
    headerName: 'Total Spent',
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
          maximumFractionDigits: 0,
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
    minWidth: 100,
    renderCell: (params) => {
      const status = getCustomerStatus(params.row.totalOrder);
      return (
        <Chip 
          label={status.label} 
          size="small" 
          color={status.color}
          sx={{ borderRadius: 1.5, minWidth: 70 }}
        />
      );
    },
  },
  {
    field: 'joinDate',
    headerName: 'Join Date',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 120,
    renderCell: () => (
      <Typography variant="body2">
        {new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
      </Typography>
    ),
  },
  {
    field: 'lastOrder',
    headerName: 'Last Order',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 120,
    renderCell: () => (
      <Typography variant="body2">
        {new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
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

interface CustomersTableProps {
  searchText: string;
}

const CustomersTable = ({ searchText }: CustomersTableProps) => {
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
      rowHeight={70}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 8 } },
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      checkboxSelection
      pageSizeOptions={[8, 16, 24]}
    />
  );
};

export default CustomersTable;