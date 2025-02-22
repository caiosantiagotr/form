import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Bem-Vindo',
          }}
        />
         <Drawer.Screen
          name="form" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Formulario',
            title: 'Cadastro',
          }}
        />
         <Drawer.Screen
          name="stack/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Navegação',
            title: 'Navegação',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
