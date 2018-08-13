import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BoardVO} from '../model/boardVO';
import {Observable} from 'rxjs/Observable';
import {BoardVoService} from '../service/boardVoService';
import {Injectable} from '@angular/core';

@Injectable()
export class BoardReslove implements Resolve<BoardVO> {

  constructor(
    private boardService : BoardVoService
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<BoardVO> | Promise<BoardVO> | BoardVO {
    let id = route.params['id'];
    console.log("resolve running");
    return this.boardService.getSimple(id);
  }


}
