const workItemsApi= "https://dev.azure.com/mohitsharmaits/Test%20Project/Test%20Project%20Team/_apis/wit/wiql?api-version=6.0";
const queryWorkFlowItems ="Select [System.Id], [System.Title], [System.State] From WorkItems";
const authorizationToken="Basic OnZ0dDZqYzVnbmpuNTRmcjdndzY0dnlreml1ejJrbnR6a2hnbjJ6c3Rhb3RsazRmZWVldGE=";

const getDetailItemApi=(workItemsList)=>{
    return   `https://dev.azure.com/mohitsharmaits/_apis/wit/workitems?ids=${workItemsList}&fields=System.Id,System.WorkItemType,System.Title,System.AssignedTo,System.State,Microsoft.VSTS.Common.Priority&api-version=6.0`;
}

export {workItemsApi,queryWorkFlowItems,getDetailItemApi,authorizationToken}