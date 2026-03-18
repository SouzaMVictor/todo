import Badge from "../components/badge";
import Text from "../components/text";

export default function TasksSummary(){
    return(
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-grey-300">
                    Tarefas criadas
                </Text>
                <Badge variant="secondary">4</Badge>
            </div>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-grey-300">
                    Concluídas
                </Text>
                <Badge variant="primary" >2 de 5</Badge>
            </div>
        </>
    )
}