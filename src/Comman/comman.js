import {
  faCrown,
  faListCheck,
  faBug,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const getIcon = (workItemType) => {
  let iconDisplay = null;
  switch (workItemType) {
    case "Epic":
      iconDisplay = faCrown;
      break;
    case "Feature":
      iconDisplay = faTrophy;
      break;
    case "Bug":
      iconDisplay = faBug;
      break;
    case "task":
      iconDisplay = faListCheck;
      break;
    default:
      iconDisplay = null;
  }
  return iconDisplay;
};

const collectAllIdData = (arr) => {
  return arr.map((x) => x.id);
};

const getParsedData = (data) => {
  let parsedData = data.map((val) => {
    return {
      id: val.id,
      level: val.fields["Microsoft.VSTS.Common.Priority"],
      title: val.fields["System.Title"],
      type: val.fields["System.WorkItemType"],
      url: val.url,
    };
  });
  return parsedData;
};

export { getIcon, collectAllIdData, getParsedData };
