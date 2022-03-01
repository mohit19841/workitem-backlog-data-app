import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postRequest, getRequest } from "./../Services/apiCall";
import { getIcon, collectAllIdData, getParsedData } from "./../Comman/comman"; // all the comman functions are here ..we can use these function at various place in furure
import { workItemsApi, getDetailItemApi,queryWorkFlowItems } from "./../Comman/staticData";
import "./DashBoard.css";

const DashBoard = () => {
  const [workItems, setWorkItems] = useState([]);
  const [detailItems, setDetailItems] = useState([]);

  const getBackLogData = async () => {
    const workItemUrl = workItemsApi;
    let response = await postRequest(workItemUrl,queryWorkFlowItems);
    setWorkItems(response.workItems); // set data for all workid, for child data we need to fetch by id's
  };

  const getDetailDataForChildItems = async (workItemsList) => {
    const detailItemUrl = getDetailItemApi(workItemsList);
    let response = await getRequest(detailItemUrl);
    let parsedData = getParsedData(response.value);
    setDetailItems(parsedData);
  };

  useEffect(() => {
    getBackLogData(); // getting data from project backload after mounting
  }, []);
  
  useEffect(() => {
    if (workItems.length) {
      let allWorkItemIds = collectAllIdData(workItems).join(",");
      getDetailDataForChildItems(allWorkItemIds);
    }
  }, [workItems]);

  return (
    <>
      <table className="workitems-table">
        <thead>
          <tr className="table-header">
            <td>ID</td>
            <td className="title-header">Title</td>
          </tr>
        </thead>
        <tbody id="table">
          {detailItems.length &&
            detailItems.map((data) => {
              return (
                <tr>
                  <td>{data.id} </td>
                  <td>
                    <a
                      title={data.url}
                      href={" "} // We can redirect this to the task detail component   we already have url in data.url for the same
                      className="item"
                      style={{
                        paddingLeft: `${(data.level + 1) * 30}px`, // we can use react libraray here to show tree form data but to make it simple i just use css
                      }}
                    >
                      <FontAwesomeIcon
                        icon={getIcon(data.type)}
                        className="item-margin-right"
                      />
                      {data.title}
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default DashBoard;
