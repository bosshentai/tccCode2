import { Drawer } from '@/components/ui/drawer';
import { ScrollBar } from '@/components/ui/scroll-area';
// import { useTheme } from '@/context/theme-context';
import { useDispatch, useSelector } from '@/store';
import { openDrawer } from '@/store/slices/menu';
import { useMemo } from 'react';

export const SideBar = () => {
  // const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);
  // const

  const drawer = useMemo(() => <ScrollBar></ScrollBar>, [drawerOpen]);

  return (
    <nav>
      <Drawer
        direction="left"
        open={drawerOpen}
        onClose={() => dispatch(openDrawer(!drawerOpen))}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};
