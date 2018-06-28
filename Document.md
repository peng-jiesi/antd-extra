Components
----------

**src\components\Button\LinkButton.js**

### 1. LinkButton

Table中的Button
```html
<LinkButton onClick={}>删除</LinkButton>
```   




-----
**src\components\Form\FormField.js**

### 1. FormField

包装form.getFieldDecorator  和 From.Item   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
form|any|no||Form.create()包装后的 props.form,  如果包裹在FormLayout 或者提供 context.form组件下, 可以不传
required|any|no||是否必填, 默认提示为 ${label}必须填写
label|any|no||Form.Item  label
help|any|no||Form.Item  help
rules|array|no||Form.Item  rules
action|element|no||在Form.Item 对象布局后提供一个action区
-----
**src\components\Form\FormLayout.js**

### 1. FormLayout

表单局部组件, 用于提供多行布局表单

直接放入FormField
```html
<FormLayout form={form} compact={true} cols={4}>
  <FormField
  label={"Test Label1111111111111"}
  name={"test"}
  required
  >
     <Input/>
  </FormField>
</FormLayout>
```

放入Fragment包裹的元素, 会被展开
```html
<FormLayout form={form} compact={true} cols={4}>
   <Fragment></Fragment>
</FormLayout>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
form|any|yes||Form.create()包装后的 props.form
cols|number|no|1|布局展示几行
compact|bool|no|false|是否紧缩布局
gutter|number|no|8|Row  gutter
-----
**src\components\Form\SearchForm.js**

### 1. SearchForm

自动布局查询表单,  可以通过min调整, 提供高级搜索能力

```
<SearchForm cols={4} min={2} actions={ <Button>测试</Button> } form={form} onSearch={(data) => {console.log(data);}}>
  {this.renderItem1()}
</SearchForm>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onSearch|func|yes||查询函数   (values,event:{action}) &#x3D;&gt; {}
event.action 触发动作 查询(SEARCH)或者重置(RESET)
min|number|no|999|精简模式下展示多少条件
queryText|string|no|&lt;See the source code&gt;|查询按钮文字
resetText|string|no|&lt;See the source code&gt;|重置按钮文字
expandText|string|no|&lt;See the source code&gt;|展开按钮文字
cols|number|no|3|布局展示几行  FormLayout cols
compact|bool|no|true|是否紧缩布局   FormLayout compact
gutter|number|no||FormLayout gutter
form|any|yes||Form.create()包装后的 props.form
actions|any|no||放置在查询按钮后的 扩展按钮
style|any|no||style
-----
**src\components\ModalView\ModalFooter.js**

### 1. ModalFooter

包裹在ModalView下的footer

```html
<ModalFooter>
  <Button
    onClick={() => {
      this.props.modalRef.close();
    }}
  >
    Close
  </Button>
</ModalFooter>
```   




-----
**src\components\ModalView\ModalView.js**

### 1. ModalView

提供全局弹窗, 弹窗内Component可以直接使用connect

```js
// 使用时首先在  dva index.js 中绑定
ModalView.bindApp(app);


// 在model 或者 Component中直接打开弹窗, 弹窗内容为Component实例
// modalConfig 见 antd Modal
// modalConfig.place  支持侧边栏模式弹窗, right | left
// contentProps  可以直接传递给Component
ModalView.open(ModalPage,modalConfig,contentProps)



// ModalPage中可以通过 props.modalRef.close() 关闭弹窗
```

ModalPage.js
```js
 * @connect()
export default class ModalPage extends React.Component {

  render() {
    return (
      <Fragment>
        <DetailView title={'详情展示'}>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
        </DetailView>

        <ModalFooter>
          <Button
            onClick={() => {
              this.props.modalRef.close();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Fragment>
    )
  }
}
```   




-----
**src\components\View\AttributeLabel.js**

### 1. AttributeLabel

DetailView 下的元素   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
label|any|yes||label
title|any|no||html.title
size|number|no|1|size 在DetailView下占据几行
-----
**src\components\View\DetailView.js**

### 1. DetailView

信息展示视图, 通过key value模式展示, 提供布局能力

```html
<DetailView title={'详情展示'}>
  <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
  <Fragment>
    <AttributeLabel label={'测试'} size={2}>xxxxxxxxxxxxxxxx</AttributeLabel>
    <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
    <AttributeLabel label={'测试'} size={4}>123123123123</AttributeLabel>
  </Fragment>
</DetailView>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|any|no||详情标题, 如果没有不展示头
cols|number|no|4|布局行数
bgColor|string|no||背景色
gutter|number|no|8|Row gutter 见:PageTitle  gutter
color|string|no||标题头的颜色 见:PageTitle color
actions|any|no||标题操作 见:PageTitle actions
titleSize|string|no||标题大小, 见: PageTitle size
-----
**src\layouts\Page\PageLayout.js**

### 1. 




-----
**src\layouts\Page\PageTitle.js**

### 1. PageTitle

页面标题
```html
 <PageTitle color={'#000000'} actions={<Button>测试</Button>}>这是一个标题</PageTitle>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
color|string|no||竖条颜色
actions|any|no||操作区域
size|string|no|&lt;See the source code&gt;|尺寸  可用 small
-----
