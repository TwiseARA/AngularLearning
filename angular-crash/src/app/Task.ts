export interface Task {
    id?: number, // The "?" makes the field optional
    text: string;
    date: string;
    reminder: boolean;
}