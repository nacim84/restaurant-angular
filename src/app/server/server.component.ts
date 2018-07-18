
import { Component } from '@angular/core';

@Component({
  selector: 'rn-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
  return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }
}
