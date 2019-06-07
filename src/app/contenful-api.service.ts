import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '7ajvyg0idzck',
  accessToken: 'MVz7rhZtdN20AXA0K4WGHdKV2H3imbv9B8PtmjBdF8I',
  accessPreviewToken: 'LoVFKsPlKMSbwOKCLp015dfSWIuJ6YhxHJECAERJF-Y',
}

@Injectable({
  providedIn: 'root'
})

export class ContenfulApiService {

  private cdaClient = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
    space: CONFIG.space,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONFIG.accessToken
  })

  constructor() { }

  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'project',
      order: '-fields.displayOrder',
      limit: 10,
    }, query))
    .then(res => res.items);
  }

}
