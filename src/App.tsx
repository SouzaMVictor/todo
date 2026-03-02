import Text from "./assets/components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import Pencil from "./assets/icons/PencilSimple-Regular.svg?react"
import Icon from "./assets/components/icon";
import Badge from "./assets/components/badge";
import Button from "./assets/components/button";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import ButtonIcon from "./assets/components/button-icon";

export default function App() {
  return (
    <div className="grid gap-3">
      
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold" className="text-pink-base">Hello, World!</Text>

      <Text className="text-green-base">Hello, World!</Text>

      <Text variant="body-md-bold">Hello, World!</Text>

      <Text>Teste de texto</Text>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base"/>
        <Icon svg={Pencil} className="fill-green-base" animate />
      </div>
      <div>
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>
          Nova tarefa
        </Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        <ButtonIcon icon={TrashIcon} />
      </div>
    </div>
    </div>
  );
}