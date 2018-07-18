import { Component, OnInit } from '@angular/core';

@Component({
  // 1 by HTML tag
  selector: 'rn-servers',
  // 2 by Attribute
  // selector: '[rn-servers]',
  // 3 by Class
  // selector: '.rn-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <rn-server></rn-server>
  //   <rn-server></rn-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }

}
