import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

import  {BarGraph} from "@/components/BarGraph";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
registerComponent(BarGraph, {
  name: "BarGraph",
  props: {
    title: {
      type: "string",
      defaultValue: "Bar Chart",
    },
    description: {
      type: "string",
      defaultValue: "January - June 2024",
    },
    className: {
      type: "string",
      defaultValue: "p-4",
    },
    barChartClassName: {
      type: "string",
    },
    chartData: {
      type: "array",
      description: "Chart data as an array of {month, desktop, mobile}",
      defaultValue: [
        { label: "January", value: 180 },
        { label: "February", value: 305 },
        { label: "March", value: 237 },
        { label: "April", value: 73 },
        { label: "May", value: 209 },
        { label: "June", value: 214 },
      ],
    },
    chartConfig: {
      type: "object",
      description: "Configuration for chart colors and labels",
      defaultValue: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
        mobile: {
          label: "Mobile",
          color: "hsl(var(--chart-2))",
        },
        label: {
          color: "hsl(var(--background))",
        },
      },
    },
  },
  importPath: "@/components/BarGraph",
});
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
