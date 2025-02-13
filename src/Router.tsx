import { createHashRouter } from "react-router-dom";
import { Home } from "./Home";
import { TabsExample } from "./TabsExample";
import { DynamicSelect } from "./DynamicSelect";
import { Mappings } from "./Mappings";
import { VDM } from "./VDM";
import { FacebookVDM } from "./VDM/Facebook";
import { SFMCVDM } from "./VDM/SFMC";
import { MultiForm } from "./MultiForm";
import { CustomHideForm } from "./CustomHideForm";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mappings",
    element: <Mappings />,
  },
  {
    path: "/tabs",
    element: <TabsExample />,
  },
  {
    path: "/hide",
    element: <CustomHideForm />,
  },
  {
    path: "/multi",
    element: <MultiForm />,
  },
  {
    path: "/dynamic-select",
    element: <DynamicSelect />,
  },
  {
    path: "/vdm",
    element: <VDM />,
  },
  {
    path: "/vdm-facebook",
    element: <FacebookVDM />,
  },
  {
    path: "/vdm-sfmc",
    element: <SFMCVDM />,
  },
]);
