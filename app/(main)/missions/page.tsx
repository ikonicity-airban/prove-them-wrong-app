import Section from "@/components/section";
import TaskList from "@/components/tasks/daily-task";
import React from "react";

function MissionPage() {
  return <Section className="p-4">
    <TaskList title="Daily Tasks"/>
    <hr className="my-10 h-2 w-1/3 mx-auto rounded-full bg-"/>
    <TaskList title="Tasks" mode="accordion"/>

  </Section>;
}

export default MissionPage;
