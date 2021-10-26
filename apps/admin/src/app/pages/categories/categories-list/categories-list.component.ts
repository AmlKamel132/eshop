import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoriesService,Category} from '@bluebitscourse/products'
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {


  categories:Category[] = [];

  constructor(private CategoriesService:CategoriesService,
             private messageService: MessageService,
             private confirmationService: ConfirmationService,
             private router:Router) { }

  ngOnInit(): void {
    this._getCategories();
  }


  deleteCategory(category_id:string){


    this.confirmationService.confirm({
      message: 'Do you want to Delete this Category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
         //confirm delete 

         this.CategoriesService.deleteCategory(category_id).subscribe(res => {
      
          console.log(res);
  
          this.messageService.add({severity:'success', summary:'success', detail:'Category Deleted !'});
  
  
          this._getCategories();
  
          
        },()=>{
    
          this.messageService.add({severity:'error', summary:'error', detail:'Category Not Deleted !'});
    
    
        });
      }
  });

  }



  updateCategory(category_id:string){

    this.router.navigateByUrl(`categories/form/${category_id}`);

  }

  private _getCategories(){

    this.CategoriesService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

}
