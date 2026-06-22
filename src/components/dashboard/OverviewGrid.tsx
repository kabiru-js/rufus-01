import React from 'react';
import { Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { StatCard } from './StatCard';

export const OverviewGrid: React.FC = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change={12.5}
          icon={<AttachMoneyIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Active Subscriptions"
          value="2,350"
          change={4.2}
          icon={<PeopleOutlineIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Sales Volume"
          value="12,234"
          change={-2.4}
          icon={<ShoppingCartOutlinedIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          change={1.8}
          icon={<TrendingUpIcon />}
        />
      </Grid>
    </Grid>
  );
};
