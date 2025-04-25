const selectedDate = document.getElementById("date");
import { schedulesDay } from "../schedules/load";

//Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay();
