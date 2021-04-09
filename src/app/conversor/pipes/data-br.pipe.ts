import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEN: string): string {
    if(!dataEN) {
      return "";
    }

    const dataArray = dataEN.split("-");

    if(dataArray.length !== 3) {
      return dataEN;
    }

    return dataArray[2] + "/" + dataArray[1] + "/" + dataArray[0];
  }

}
