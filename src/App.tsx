import Text from "./assets/components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import Pencil from "./assets/icons/PencilSimple-Regular.svg?react";
import Icon from "./assets/components/icon";
import Badge from "./assets/components/badge";
import Button from "./assets/components/button";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import ButtonIcon from "./assets/components/button-icon";
import InputText from "./assets/components/input-text";
import InputCheckbox from "./assets/components/input-checkbox";
import Card from "./assets/components/card";
import Container from "./assets/components/container";
import Skeleton from "./assets/components/skeleton";

export default function App() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Hello, World!
          </Text>

          <Text className="text-green-base">Hello, World!</Text>

          <Text variant="body-md-bold">Hello, World!</Text>

          <Text>Teste de texto</Text>

          <div className="flex gap-1">
            <Icon svg={TrashIcon} className="fill-green-base" />
            <Icon svg={Pencil} className="fill-green-base" animate />
          </div>
          <div className="flex gap-1">
            <Badge variant="primary">5</Badge>
            <Badge variant="secondary">2 de 5</Badge>
             <Badge loading></Badge>
          </div>
          <div>
            <Button icon={PlusIcon}>Nova tarefa</Button>
          </div>

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} />
            <ButtonIcon icon={TrashIcon} variant="secondary" />
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={TrashIcon} />
               <ButtonIcon icon={TrashIcon} loading />
          </div>

          <div>
            <InputText />
          </div>
          <div>
            <InputCheckbox />
            <InputCheckbox loading />
          </div>
          <div>
            <Card size="md">Olá, mundo</Card>
          </div>
          <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
        </div>
      </div>
    </Container>
  );
}
