import { environment } from './../../environments/environment';
import { throwError } from 'rxjs';
export class Utils {

  static getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }


  static getCustomers(): string {
    return environment.baseUrl + environment.baseUrlCustomers
  }

  static getCustomerById(identification: String): string {
    return environment.baseUrl +
      environment.baseUrlCustomers +
      identification
  }

  static parseErrorHandle(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Código de error: ${error.status} `;
      if (error.status === 0) {
        errorMessage = 'Internal Server Error';
      }
    }
    return throwError(errorMessage);
  }
}
