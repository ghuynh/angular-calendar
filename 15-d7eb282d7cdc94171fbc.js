webpackJsonp([15],{672:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"sources",function(){return t});var t=[{filename:"component.ts",contents:o(766)},{filename:"template.html",contents:o(767)},{filename:"module.ts",contents:o(768)}]},766:function(e,n){e.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [\n    {\n      title: 'Increments badge total on the day cell',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: true\n      }\n    },\n    {\n      title: 'Does not increment the badge total on the day cell',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: false\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(day => {\n      day.badgeTotal = day.events.filter(\n        event => event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n"},767:function(e,n){e.exports='<mwl-calendar-month-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [activeDayIsOpen]="true"\n  (beforeViewRender)="beforeMonthViewRender($event)">\n</mwl-calendar-month-view>'},768:function(e,n){e.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"}});
//# sourceMappingURL=15-d7eb282d7cdc94171fbc.js.map