import { MenuProps } from '@/types/menu';
import { createSlice } from '@reduxjs/toolkit';
const initialState: MenuProps = {
  selectedItem: ['dashboard'],
  selectedID: null,
  drawerOpen: false,
  error: null,
  menuDashboard: {},
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.selectedItem = action.payload;
    },
    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },

    // has error
    hasError(state, action) {
      state.error = action.payload;
    },

    // get dashboard menu
    getMenuListSuccess(state, action) {
      state.menuDashboard = action.payload;
    },
  },
});

export default menu.reducer;

export const { activeItem, openDrawer, activeID } = menu.actions;
