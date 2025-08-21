import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import ActionMenu from 'components/common/ActionMenu';
import Image from 'components/base/Image';
import { formatNumber } from 'helpers/formatNumber';
import { rows } from 'data/recentOrdersData';

const actions = [
  {
    id: 1,
    icon: 'solar:eye-bold',
    title: 'View',
  },
  {
    id: 2,
    icon: 'solar:pen-bold',
    title: 'Edit',
  },
  {
    id: 3,
    icon: 'solar:trash-bin-trash-bold',
    title: 'Delete',
  },
];

const getStockStatus = (stock: number) => {
  if (stock === 0) return { label: 'Out of Stock', color: 'error' as const };
  if (stock < 50) return { label: 'Low Stock', color: 'warning' as const };
  return { label: 'In Stock', color: 'success' as const };
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
    field: 'price',
    headerName: 'Price',
    headerAlign: 'left',
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
    field: 'inStock',
    headerName: 'Stock',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => {
      const status = getStockStatus(params.value);
      return (
        <Stack spacing={0.5}>
          <Typography variant="body2" fontWeight={600}>
            {params.value}
          </Typography>
          <Chip 
            label={status.label} 
            size="small" 
            color={status.color}
            sx={{ borderRadius: 1.5, fontSize: '0.7rem' }}
          />
        </Stack>
      );
    },
  },
  {
    field: 'totalOrder',
    headerName: 'Total Sales',
    editable: false,
    headerAlign: 'left',
    align: 'left',
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
    headerName: 'Revenue',
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

interface ProductsTableProps {
  searchText: string;
}

const ProductsTable = ({ searchText }: ProductsTableProps) => {
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

export default ProductsTable;