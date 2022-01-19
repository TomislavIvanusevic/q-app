import axios, { AxiosStatic } from 'axios';

export default class ApiService {
  client: AxiosStatic;

  constructor() {
    this.client = axios;
    this.client.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  getAll(resource: string) {
    try {
      return this.client.get(`${resource}`);
    } catch (error) {
      throw new Error('Error fetching');
    }
  }

  get(resource: string, slug: string | number) {
    try {
      return this.client.get(`${resource}/${slug}`);
    } catch (error) {
      throw new Error('Error fetching');
    }
  }

  delete(resource: string, slug: string | number) {
    return this.client.delete(`${resource}/${slug}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  }
}

export class PostsService {
  apiService: ApiService;

  resource: string;

  constructor() {
    this.apiService = new ApiService();
    this.resource = 'posts';
  }

  getAll() {
    return this.apiService.getAll(this.resource);
  }

  get(slug: number) {
    return this.apiService.get(this.resource, slug);
  }
}

export class CommentService {
  apiService: ApiService;

  resource: string;

  constructor() {
    this.apiService = new ApiService();
    this.resource = 'comments';
  }

  getAll() {
    return this.apiService.getAll(this.resource);
  }

  get(slug: number) {
    return this.apiService.get(this.resource, slug);
  }
}

export class UserService {
  apiService: ApiService;

  resource: string;

  constructor() {
    this.apiService = new ApiService();
    this.resource = 'users';
  }

  getAll() {
    return this.apiService.getAll(this.resource);
  }

  get(slug: number | string) {
    return this.apiService.get(this.resource, slug);
  }
}
