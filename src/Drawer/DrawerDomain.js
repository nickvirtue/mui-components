import { observable, computed, action } from 'mobx'
import { app } from '@mindhive/di'
import { WindowSize } from '../responsiveUi/windowMetrics'


const dockedWindowSize = WindowSize.MEDIUM

export class DrawerDomain {

  @observable wantDocked = true
  @observable wantOpen = null

  @computed get canDock() {
    return app().windowMetricsDomain.size.ordinal >= dockedWindowSize.ordinal
  }

  @computed get docked() {
    return this.canDock && this.wantDocked
  }

  @computed get open() {
    return this.docked ? null : this.wantOpen
  }

  @action toggle = () => {
    if (this.canDock) {
      this.wantDocked = ! this.wantDocked
    } else {
      this.wantOpen = ! this.wantOpen
    }
  }

  onTouchTap = () => {
    if (! this.docked) {
      this.setWantOpen(false)
    }
  }

  @action setWantOpen = (open) => {
    this.wantOpen = open
  }
}
