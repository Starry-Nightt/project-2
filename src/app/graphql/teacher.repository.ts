import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_ALL_TEACHER, UPDATE_TEACHER } from './graphql.operation';
import { GENDER } from '@constants/enum';

@Injectable({
  providedIn: 'root',
})
export class TeacherRepository {
  constructor(private apollo: Apollo, private storage: StorageService) {}

  getAllTeacher(): Observable<any> {
    return this.apollo.watchQuery({ query: GET_ALL_TEACHER }).valueChanges;
  }

  updateTeacher(detail: {
    firstName?: String;
    lastName?: String;
    gender?: GENDER;
  }): Observable<any> {
    return this.apollo.mutate({
      mutation: UPDATE_TEACHER,
      variables: { info: detail },
    });
  }
}
