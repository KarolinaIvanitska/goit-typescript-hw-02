/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentObj {
  title: string;
  [props: string]: string | number | boolean;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentObj> {
  pageInfo() {
    console.log(this.props.title);
  }
}
export {};
