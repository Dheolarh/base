import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import ActionMenu from 'components/common/ActionMenu';
import Image from 'components/base/Image';
import { formatNumber } from 'helpers/formatNumber';
import { rows } from 'data/recentOrdersData';

const actions = [
  {
    id: 1,
    icon: 'solar:box-bold',
    title: 'Restock',
  },
  {
    id: 2,
    icon: 'solar:pen-bold',
    title: 'Edit',
  },
  {
    id: 3,
    icon: 'solar:history-bold',
    title: 'History',
  },
];

const getStockLevel = (current: number, max: number = 1000) => {
  const percentage = (current / max) * 100;
  if (percentage < 20) return { level: 'Critical', color: 'error' as const, percentage };
  if (percentage < 50) return { level: 'Low', color: 'warning' as const, percentage };
  return { level: 'Good', color: 'success' as const, percentage };
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
    field: 'product',
    headerName: 'Product',
    editable: false,
    align: 'left',
    flex: 3,
    minWidth: 250,
    renderCell: (params) => {
      return (
        <Stack height={1} spacing={1.5} alignItems="center" justifyContent="flex-start">
          <Image
            src={params.row.product.image}
            height={40}
            width={40}
            sx={{ objectFit: 'cover', borderRadius: 2 }}
          />
          <Stack>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {params.row.product.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              SKU: {params.row.id}
            </Typography>
          </Stack>
        </Stack>
      );
    },
  },
  {
    field: 'inStock',
    headerName: 'Current Stock',
    editable: false,
    align: 'center',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600}>
        {params.value} units
      </Typography>
    ),
  },
  {
    field: 'stockLevel',
    headerName: 'Stock Level',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 180,
    renderCell: (params) => {
      const stockInfo = getStockLevel(params.row.inStock);
      return (
        <Stack spacing={1} width="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Chip 
              label={stockInfo.level} 
              size="small" 
              color={stockInfo.color}
              sx={{ borderRadius: 1.5, fontSize: '0.7rem' }}
            />
            <Typography variant="caption" color="text.secondary">
              {stockInfo.percentage.toFixed(0)}%
            </Typography>
          </Stack>
          <LinearProgress 
            variant="determinate" 
            value={stockInfo.percentage} 
            color={stockInfo.color}
            sx={{ height: 6, borderRadius: 3 }}
          />
        </Stack>
      );
    },
  },
  {
    field: 'price',
    headerName: 'Unit Price',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 100,
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
    field: 'totalValue',
    headerName: 'Total Value',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography variant="body2" fontWeight={600}>
        {formatNumber(params.row.inStock * params.row.price, {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })}
      </Typography>
    ),
  },
  {
    field: 'lastRestocked',
    headerName: 'Last Restocked',
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

interface InventoryTableProps {
  searchText: string;
}

const InventoryTable = ({ searchText }: InventoryTableProps) => {
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
      rowHeight={80}
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

export default InventoryTable;