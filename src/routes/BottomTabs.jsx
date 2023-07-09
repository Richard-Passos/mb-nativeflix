import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Search, Home, Settings } from "../views";
import { withTheme, IconButton } from "react-native-paper";

const BottomTab = createMaterialBottomTabNavigator();

const views = [
  { comp: Search, iconName: "magnify" },
  { comp: Home, iconName: "home" },
  { comp: Settings, iconName: "cog" },
];

const BottomTabs = () => {
  const icon = (name, info) => <Icon name={name} info={info} />;

  return (
    <Navigator>
      {views.map(({ comp, iconName }) => (
        <BottomTab.Screen
          key={comp.name}
          name={comp.name}
          component={comp}
          options={{
            tabBarLabel: comp.name,
            tabBarIcon: (info) => icon(iconName, info),
          }}
        />
      ))}
    </Navigator>
  );
};

const Navigator = withTheme(({ theme, children }) => (
  <BottomTab.Navigator
    initialRouteName={Home.name}
    shifting
    barStyle={{
      backgroundColor: theme.colors.backgroundVariant,
    }}
    activeColor={theme.colors.primary}
  >
    {children}
  </BottomTab.Navigator>
));

const Icon = withTheme(({ name, info, theme }) => (
  <IconButton
    icon={name}
    iconColor={info.focused ? theme.colors.primary : theme.colors.onSurface}
    size={28}
    style={{ bottom: 16 }}
  />
));

export default BottomTabs;
