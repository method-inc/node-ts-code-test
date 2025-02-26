import request from "supertest";
import app from "../src/index";
// We can also import TaskService, but we’ll show mocking in example test below.
// import { TaskService } from "../src/services/TaskService";

describe("User & Task API", () => {
  it("GET /api/users/:id => returns 404 if user is not found", async () => {
    const res = await request(app).get("/api/users/999");
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("User not found");
  });

  /**
   * BUG FIX TEST:
   * We want to ensure GET /api/tasks?userId=1
   * returns only tasks with userId === 1.
   *
   * Once you fix the route in index.ts, write a test to confirm:
   */
  it("GET /api/tasks?userId=1 => returns tasks that belong only to user 1", async () => {
    // TODO: Implement a test that confirms the bug is fixed.
    // Example approach:
    // 1. Send GET /api/tasks?userId=1
    // 2. Ensure the response only has tasks where task.userId = 1
  });

  /**
   * EXAMPLE of how you'd mock the TaskService (if you needed it):
   *
   * it("should mock TaskService.getTasksByUserId", async () => {
   *   const mockGetTasksByUserId = jest.spyOn(TaskService.prototype, "forUser")
   *       .mockReturnValue([{ id: 999, userId: 1, title: "Mocked!", status: "TODO" }]);
   *
   *   const res = await request(app).get("/api/tasks?userId=1");
   *   expect(mockGetTasksByUserId).toHaveBeenCalledWith(1);
   *   // do more checks...
   *   mockGetTasksByUserId.mockRestore();
   * });
   */

  /**
   * FEATURE TEST:
   * DELETE /api/users/:id => removes a user
   */
  it("DELETE /api/users/:id => should delete the user or return 404", async () => {
    // TODO: Implement this test
  });
});
