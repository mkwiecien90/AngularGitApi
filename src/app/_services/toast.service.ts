import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastrService: ToastrService) {
  }

  onSuccess(message: string) {
    this.toastrService.success(message);
  }

  onError(message: string) {
    this.toastrService.error(message);
  }

  onInfo(message: string) {
    this.toastrService.info(message);
  }
}
