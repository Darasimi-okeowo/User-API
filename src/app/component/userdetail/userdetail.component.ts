import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from '../../interface/response.interface';
import { User } from '../../interface/user.interface';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent implements OnInit {
  response: Response;
  user: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));
    console.log(this.user);
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       this.response = response;
    //     }
    //   )
    // })


  }

}
