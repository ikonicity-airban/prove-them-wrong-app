"use client";;
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Coins } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  reward: number;
  description: string;
  performAction: string;
}

type TaskListProps = {
  tasks?: Task[];
  title?: string;
  mode?: "full" | "accordion";
};

export default function TaskList({ title = "Tasks" }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete project proposal",
      completed: false,
      reward: 50,
      description:
        "Write a detailed project proposal including objectives, timeline, and resource requirements.",
      performAction: "Start Writing",
    },
    {
      id: 2,
      title: "Review code changes",
      completed: true,
      reward: 30,
      description:
        "Review the latest pull request and provide feedback on the code changes.",
      performAction: "Open GitHub",
    },
    {
      id: 3,
      title: "Update documentation",
      completed: false,
      reward: 40,
      description:
        "Update the user guide with the latest features and improvements.",
      performAction: "Open Docs",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const completeTask = (id: number) => {
    setTasks(
      tasks
        .map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
        .sort((a) => (a.completed ? 1 : -1))
    );
  };

  const openTaskDetails = (task: Task) => {
    setSelectedTask(task);
    setIsSheetOpen(true);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          className={`${task.completed ? "bg-green-50" : ""} cursor-pointer`}
          onClick={() => openTaskDetails(task)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </label>
                <div className="flex items-center text-xs text-gray-500">
                  <Coins className="h-3 w-3 mr-1" />
                  <span>{task.reward} PTW</span>
                </div>
              </div>
              {task.completed && <Check className="text-green-500" />}
            </div>
          </CardContent>
        </Card>
      ))}

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="bottom" className="h-[50vh]">
          {selectedTask && (
            <div>
              <SheetHeader>
                <SheetTitle>{selectedTask.title}</SheetTitle>
                <SheetDescription>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Coins className="h-4 w-4 mr-1" />
                    <span>{selectedTask.reward} PTW</span>
                  </div>
                  {selectedTask.description}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <Button
                  onClick={() => {
                    // Perform task-specific action here
                    completeTask(1);
                    console.log(
                      `Performing action: ${selectedTask.performAction}`
                    );
                    setIsSheetOpen(false);
                  }}
                >
                  {selectedTask.performAction}
                </Button>
                <Button variant="outline" onClick={() => setIsSheetOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
