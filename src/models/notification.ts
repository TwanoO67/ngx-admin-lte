export class Notification {
  content: string;
  class: string;
  link: string;

  constructor(data: any = {}) {
    this.content = data.content || '';
    this.class = data.class || '';
    this.link = data.link || '';
  }
}
