import path from "path";
import { IconDefinition } from "../scripts/_type";

const __dirname = path.resolve();
export const icons: IconDefinition[] = [
  {
    id: "ai",
    name: "Ant Design Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/filled/*.svg"
        ),
        formatter: (name) => `AiFill${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/outlined/*.svg"
        ),
        formatter: (name) => `AiOutline${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/twotone/*.svg"
        ),
        formatter: (name) => `AiTwotone${name}`,
        multiColor: true,
      },
    ],
    projectUrl: "https://github.com/ant-design/ant-design-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "ant-design-icons",
      remoteDir: "packages/icons-svg/svg/",
      url: "https://github.com/ant-design/ant-design-icons.git",
      branch: "master",
      hash: "655d46ec72d78357d7c6c0ac1c623b8975bc4f76",
    },
  },
  // {
  //   id: "ci",
  //   name: "Circum Icons",
  //   contents: [
  //     {
  //       files: path.resolve(__dirname, "../../icons/Circum-Icons/svg/*.svg"),
  //       formatter: (name) => `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
  //     },
  //   ],
  //   projectUrl: "https://circumicons.com/",
  //   license: "MPL-2.0 license",
  //   licenseUrl:
  //     "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE",
  //   source: {
  //     type: "git",
  //     localName: "Circum-Icons",
  //     remoteDir: "svg/",
  //     url: "https://github.com/Klarr-Agency/Circum-Icons.git",
  //     branch: "main",
  //     hash: "cec1364b5199f55e946a9a8360385a958b98cc60",
  //   },
  // },
];
