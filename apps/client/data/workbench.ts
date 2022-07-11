import { useQuery } from "react-query";
import { IApproval, IReport } from "types";
import request from "../utils/request";

/**
 * 发送请假的申请
 * @param data
 */
export function sendLeaveApplication(data: {
  type: string;
  startTime: string;
  endTime: string;
  reason: string;
}) {
  return request({
    url: "/workbench/leave",
    method: "POST",
    data,
  });
}

/**
 * 发送加班的申请
 */
export function sendOvertimeApplication(data: {
  startTime: string;
  endTime: string;
  reason: string;
}) {
  return request({
    url: "/workbench/overtime",
    method: "POST",
    data,
  });
}

/**
 * 发送外出的申请
 * @param data
 */
export function sendOutsideApplication(data: {
  startTime: string;
  endTime: string;
  reason: string;
}) {
  return request({
    url: "/workbench/outside",
    method: "POST",
    data,
  });
}

function fetchApprovalData() {
  return request({
    url: "/workbench/approval",
    method: "GET",
  });
}
/**
 * 获取审批的数据
 */
export function useFetchApprovalData() {
  const { data, isLoading } = useQuery<{ list: Array<IApproval> }>(
    "ApprovalData",
    fetchApprovalData,
    {
      refetchInterval: false,
    }
  );

  return {
    approvalData: data?.list,
    isLoading,
  };
}

/**
 * 发送汇报
 */
export function sendReport(
  type: "day" | "week" | "month",
  data: {
    title: string;
    curReport: string;
    prevReport: string;
    otherReport: string;
  }
) {
  return request({
    url: `/workbench/report?type=${type}`,
    method: "POST",
    data,
  });
}

function fetchReport() {
  return request({
    url: "/workbench/report",
    method: "GET",
  });
}
/**
 * 获取 report 的信息
 */
export function useFetchReport() {
  const { data, isLoading } = useQuery<{
    list: Array<IReport>;
  }>("fetchReport", fetchReport, {
    refetchInterval: false,
  });

  return {
    reportData: data?.list,
    isLoading,
  };
}