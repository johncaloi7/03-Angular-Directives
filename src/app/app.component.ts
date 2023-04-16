import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 3;

  images = [
    {
      title: 'Beach Party',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Forest Gump',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Lake Placid',
      url: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Snaky Mountain',
      url: 'https://plus.unsplash.com/premium_photo-1666324043887-5aa2595ed33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  checkWindowsIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
