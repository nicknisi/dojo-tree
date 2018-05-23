## Start test application
 - Clone the project
 - run `npm install`
 - run `npm run dev`
 
## Issue 1:
 1. open `localhost:9999` in some browser
 2. Two buttons (`Test1` and `Test2`) are dispalyed together with test bellow `Test view 2`
 3. Click on button named `Test1` --> additional button will appear named `TreeView`
 4. Click on `TreeView` button --> Tree displayed
 5. Click on `Test2` button --> Miracle...

Two outlets are displayed at the same time!

## Issue 2:
  1. Do the steps `[1-4]` from the `Issue 1`
  2. Click on `red arrow '>'` at the first row --> Miracle...
  
Sub-tree has been displayed at the end of the tree!

## Fix for `Issue 1`:

Open `App.ts` and look at the render method:

```  
protected render() {
       return [
         w(Button, {onClick: () => this.navigate(treeContainerOutletName)}, ['TreeView']),
         w(TreeContainerOutlet, {})
       ]
     }
   } 
```
Wrap the return statement with an additional `div` element and everything will work.
 
 ```  
 protected render() {
        return v('div', [
          w(Button, {onClick: () => this.navigate(treeContainerOutletName)}, ['TreeView']),
          w(TreeContainerOutlet, {})
        ]);
      }
    } 
 ```
 
 ## FIx for `Issue 2`:

Open file `TreeView.ts` and find `render` method of `TreeRow` class.

```js
  protected render(): DNode | DNode[] {
    .
    .
    .
    return [this._renderInDept()].concat(childRows);
  }
```
 
Change it to return wrapped elements in the single node and not array of `tr's`.

```js
  protected render(): DNode | DNode[] {
    .
    .
    .
    return v('div', [this._renderInDept()].concat(childRows));
  }
```
 