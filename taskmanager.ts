interface Database {
    save(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    fetch(taskId: number): Promise<Task | null>;
    fetchAll(): Promise<Task[]>;
  }
  
  class Task {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public completed: boolean = false
    ) {}
  
    markAsCompleted() {
      this.completed = true;
    }
  
    toString(): string {
      return `${this.title} (ID: ${this.id}) - ${this.completed ? "Completed" : "Pending"}`;
    }
  }
  
  class TaskManager {
    private tasks: Task[] = [];
    private db: Database;
  
    constructor(db: Database) {
      this.db = db;
    }
  
    async addTask(title: string, description: string): Promise<Task> {
      const newTask = new Task(this.tasks.length + 1, title, description);
      this.tasks.push(newTask);
      await this.db.save(newTask);  // Simulating saving to a database
      return newTask;
    }
  
    async updateTask(taskId: number, title: string, description: string): Promise<Task | null> {
      const task = await this.db.fetch(taskId);
      if (task) {
        task.title = title;
        task.description = description;
        await this.db.update(task); // Simulating updating a database record
        return task;
      } else {
        return null;
      }
    }
  
    async getTask(taskId: number): Promise<Task | null> {
      return this.db.fetch(taskId);
    }
  
    async listTasks(): Promise<string> {
      const tasks = await this.db.fetchAll();
      return tasks.map((task) => task.toString()).join("\n");
    }
  }
  
  // Mock Database class implementing the Database interface
  class InMemoryDatabase implements Database {
    private storage: Map<number, Task> = new Map();
  
    async save(task: Task): Promise<void> {
      this.storage.set(task.id, task);
    }
  
    async update(task: Task): Promise<void> {
      if (this.storage.has(task.id)) {
        this.storage.set(task.id, task);
      }
    }
  
    async fetch(taskId: number): Promise<Task | null> {
      return this.storage.get(taskId) ?? null;
    }
  
    async fetchAll(): Promise<Task[]> {
      return Array.from(this.storage.values());
    }
  }
  
  // Example Usage
  (async () => {
    const db = new InMemoryDatabase();
    const manager = new TaskManager(db);
  
    // Adding tasks
    const task1 = await manager.addTask("Finish TypeScript project", "Complete all modules and submit");
    const task2 = await manager.addTask("Grocery Shopping", "Buy vegetables, fruits, and bread");
  
    console.log("All Tasks:");
    console.log(await manager.listTasks());
  
    // Updating a task
    await manager.updateTask(task1.id, "Finish TypeScript project", "Complete all modules and tests");
    
    console.log("\nAfter Update:");
    console.log(await manager.listTasks());
  
    // Fetching a single task
    const fetchedTask = await manager.getTask(task1.id);
    console.log("\nFetched Task:");
    if (fetchedTask) {
      console.log(fetchedTask.toString());
    }
  })();
  