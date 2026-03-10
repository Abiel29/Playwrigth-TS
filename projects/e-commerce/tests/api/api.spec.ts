import { test, expect } from '@playwright/test';

const API_BASE = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing Examples', () => {
  test.describe('GET Requests', () => {
    test('should fetch all users', async ({ request }) => {
      const response = await request.get(`${API_BASE}/users`);
      
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
      
      const users = await response.json();
      expect(users).toBeInstanceOf(Array);
      expect(users.length).toBeGreaterThan(0);
    });

    test('should fetch single user by id', async ({ request }) => {
      const response = await request.get(`${API_BASE}/users/1`);
      
      expect(response.ok()).toBeTruthy();
      const user = await response.json();
      
      expect(user).toHaveProperty('id', 1);
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });

    test('should return 404 for non-existent user', async ({ request }) => {
      const response = await request.get(`${API_BASE}/users/9999`);
      expect(response.status()).toBe(404);
    });

    test('should fetch posts with query parameters', async ({ request }) => {
      const response = await request.get(`${API_BASE}/posts`, {
        params: { userId: 1 },
      });
      
      expect(response.ok()).toBeTruthy();
      const posts = await response.json();
      
      posts.forEach((post: { userId: number }) => {
        expect(post.userId).toBe(1);
      });
    });
  });

  test.describe('POST Requests', () => {
    test('should create new post', async ({ request }) => {
      const newPost = {
        title: 'Test Post',
        body: 'This is a test post body',
        userId: 1,
      };

      const response = await request.post(`${API_BASE}/posts`, {
        data: newPost,
      });

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(201);
      
      const createdPost = await response.json();
      expect(createdPost).toHaveProperty('id');
      expect(createdPost.title).toBe(newPost.title);
      expect(createdPost.body).toBe(newPost.body);
    });

    test('should create new comment', async ({ request }) => {
      const newComment = {
        postId: 1,
        name: 'Test Comment',
        email: 'test@example.com',
        body: 'This is a test comment',
      };

      const response = await request.post(`${API_BASE}/comments`, {
        data: newComment,
      });

      expect(response.ok()).toBeTruthy();
      const createdComment = await response.json();
      expect(createdComment.email).toBe(newComment.email);
    });
  });

  test.describe('PUT Requests', () => {
    test('should update existing post', async ({ request }) => {
      const updatedPost = {
        id: 1,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1,
      };

      const response = await request.put(`${API_BASE}/posts/1`, {
        data: updatedPost,
      });

      expect(response.ok()).toBeTruthy();
      const post = await response.json();
      expect(post.title).toBe(updatedPost.title);
    });
  });

  test.describe('PATCH Requests', () => {
    test('should partially update post', async ({ request }) => {
      const response = await request.patch(`${API_BASE}/posts/1`, {
        data: { title: 'Patched Title' },
      });

      expect(response.ok()).toBeTruthy();
      const post = await response.json();
      expect(post.title).toBe('Patched Title');
    });
  });

  test.describe('DELETE Requests', () => {
    test('should delete post', async ({ request }) => {
      const response = await request.delete(`${API_BASE}/posts/1`);
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
    });
  });

  test.describe('Response Validation', () => {
    test('should validate response headers', async ({ request }) => {
      const response = await request.get(`${API_BASE}/posts/1`);
      
      expect(response.headers()['content-type']).toContain('application/json');
    });

    test('should validate response schema', async ({ request }) => {
      const response = await request.get(`${API_BASE}/users/1`);
      const user = await response.json();

      // Validate required fields
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');

      // Validate nested object
      expect(user.address).toHaveProperty('street');
      expect(user.address).toHaveProperty('city');
      expect(user.address).toHaveProperty('zipcode');
      expect(user.address.geo).toHaveProperty('lat');
      expect(user.address.geo).toHaveProperty('lng');
    });

    test('should measure response time', async ({ request }) => {
      const startTime = Date.now();
      const response = await request.get(`${API_BASE}/posts`);
      const endTime = Date.now();
      
      const responseTime = endTime - startTime;
      expect(response.ok()).toBeTruthy();
      expect(responseTime).toBeLessThan(5000); // Should respond within 5 seconds
    });
  });
});
