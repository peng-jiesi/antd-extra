Components
----------

**src\components\Button\DividerGroup.js**

### 1. DividerGroup

Table中的Button
```html
<LinkButton onClick={}>删除</LinkButton>
```   




-----
**src\components\Button\LinkButton.js**

### 1. LinkButton

Table中的Button
```html
<LinkButton onClick={}>删除</LinkButton>
```   




-----
**src\components\Card\index.js**

### 1. CustomCard




-----
**src\components\Form\FormField.js**

### 1. FormField

包装form.getFieldDecorator  和 From.Item   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
required|any|no||是否必填, 默认提示为 ${label}必须填写
label|any|no||Form.Item  label
help|any|no||Form.Item  help
rules|array|no||Form.Item  rules
valuePropName|any|no||getFieldDecorator, options.valuePropName
action|element|no||在Form.Item 对象布局后提供一个action区
block|bool|no||是否占整行,  必须在FormLayout下面才有用,  建议在FormLayout.cols &#x3D; 2  4 的时候使用,  3 会有偏移
-----
**src\components\Form\FormLayout.js**

### 1. FormLayout

表单局部组件, 用于提供多行布局表单

直接放入FormField
```html
<FormLayout compact={true} cols={4}>
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
<FormLayout compact={true} cols={4}>
   <Fragment></Fragment>
</FormLayout>
```

下级元素存在block属性时, 会展开为单行, 建议用cols=2 | 4 的时候使用
```html
<FormLayout compact={true} cols={4}>
  <FormField block label={"Test Label11111111111"} name={"test"} required>
    <Input/>
  </FormField>
  <FormField label={"Test Label22222222222"} name={"test2"} required>
    <Input/>
  </FormField>
  <FormField label={"Test Label22222222222"} name={"test2"} required>
    <Input/>
  </FormField>
</FormLayout>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
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
onSearch|func|yes||查询函数   (values,event:{action}) &#x3D;&gt; {}, event.action 触发动作 查询(SEARCH)或者重置(RESET)
onReset|func|no||点击重置后触发,  会在onSearch之前执行,    重置会触发一次onSearch(空值)
min|number|no|999|精简模式下展示多少条件
queryText|string|no|&lt;See the source code&gt;|查询按钮文字
resetText|string|no|&lt;See the source code&gt;|重置按钮文字
expandText|string|no|&lt;See the source code&gt;|展开按钮文字
collapseText|string|no|&lt;See the source code&gt;|收缩按钮文字
cols|number|no|3|布局展示几行  FormLayout cols
compact|bool|no|true|是否紧缩布局   FormLayout compact
gutter|number|no||FormLayout gutter
actions|any|no||放置在查询按钮后的 扩展按钮
style|any|no||style
-----
**src\components\ModalView\ModalOpener.js**

### 1. ModalOpener

弹窗按钮包装
```html
        <ModalOpener
          content={ModalPage}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
```
content:   弹窗内的组件,   ReactComponent
custProps:   传入  content实例的props
onOk:  提交事件,   如果不关联form 为 (event)=>{},  关联form为  (data,modalCloseFun, {initData,form, e })
onOpen:  打开弹窗前调用 ()=>{}
onCancel: 取消事件,   (event)=>{}

与Form组件联动
如下列例子中,  ModalForm 为带Form的组件
```html
        <ModalOpener
          content={ModalForm}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
```
需要在ModalForm中, 通过ref={props.forwardedRef} 关联Form组件, 组件将自动校验form, 直接传递form值到回调onOk
如下,  
```html
      <Form ref={forwardedRef}>
        <FormLayout>
          <FormField
            label={"Test Label"}
            name={"test1"}
            initialValue={data.test}
            required
          >
            <Input />
          </FormField>
        </FormLayout>
      </Form>
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
**src\components\View\TableResponsive.js**

### 1. TableResponsive




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

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
