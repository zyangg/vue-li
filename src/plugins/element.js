import Vue from 'vue'
import {
  Button, Form, Input, FormItem, Message, Container, Header,
  Aside, Main, Footer, Menu, MenuItem, Submenu, MenuItemGroup, Breadcrumb, BreadcrumbItem,
  Card, Row, Col, Table, TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox,
  Tag, Tree, Select, Option, Cascader, Alert, Tabs, TabPane, Steps, Step, CheckboxGroup, Checkbox, Upload, Timeline, TimelineItem
} from 'element-ui'

// import Timeline from './timeline/index.js'
// import TimelineItem from './timeline-item/index.js'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.prototype.$confirm = MessageBox.confirm

Vue.prototype.$message = Message
