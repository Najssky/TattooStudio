import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SpinnerModule} from 'primeng/spinner';
import {SplitButtonModule} from 'primeng/splitbutton';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

const primeModules = [
    AccordionModule,
    AutoCompleteModule,
BreadcrumbModule,
 ButtonModule,
 CalendarModule,
 CardModule,
 CarouselModule,
 CheckboxModule,
 ChipsModule,
 ConfirmDialogModule,
 ColorPickerModule,
 ContextMenuModule,
 DataViewModule,
 DialogModule,
 DropdownModule,
 FieldsetModule,
 FileUploadModule,
 GalleriaModule,
 InplaceModule,
 InputMaskModule,
 InputNumberModule,
 InputSwitchModule,
 InputTextModule,
 InputTextareaModule,
 ListboxModule,
 MegaMenuModule,
 MenuModule,
 MenubarModule,
 MessagesModule,
 MessageModule,
 MultiSelectModule,
 OrderListModule,
 OrganizationChartModule,
 OverlayPanelModule,
 PaginatorModule,
 PanelModule,
 PanelMenuModule,
 PasswordModule,
 PickListModule,
 ProgressBarModule,
 RadioButtonModule,
 RatingModule,
 RippleModule,
 ScrollPanelModule,
 SelectButtonModule,
 SidebarModule,
 SlideMenuModule,
 SliderModule,
 SpinnerModule,
 SplitButtonModule,
 StepsModule,
 TabMenuModule,
 TableModule,
 TabViewModule,
 TerminalModule,
 TieredMenuModule,
 ToastModule,
 ToggleButtonModule,
 ToolbarModule,
 TooltipModule,
 TreeModule,
 TreeTableModule,
 VirtualScrollerModule,
]

@NgModule({
    imports: [CommonModule, ...primeModules],
  exports: [...primeModules],
})
export class PrimeNgModule { }