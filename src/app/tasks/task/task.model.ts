export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface NewTask {
    submittedTitle: string,
    submittedSummary: string,
    submittedDate: string
}