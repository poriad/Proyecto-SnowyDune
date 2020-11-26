import { Component, OnInit, ViewChildren } from '@angular/core';
import { CarRental } from 'src/app/models/car-rental';
import { Classes } from 'src/app/models/classes';
import { Hotel } from 'src/app/models/hotel';
import { SkiMaterial } from 'src/app/models/ski-material';
import { CarRentalService } from 'src/app/service/car-rental.service';
import { ClassesService } from 'src/app/service/classes.service';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { HotelService } from 'src/app/service/hotel.service';
import { SkiMaterialService } from 'src/app/service/ski-material.service';
import { Header } from 'src/app/utils/header';

@Component({
  selector: 'app-enterprise-list-services',
  templateUrl: './enterprise-list-services.component.html',
  styleUrls: ['./enterprise-list-services.component.css']
})
export class EnterpriseListServicesComponent implements OnInit {
  @ViewChildren('closebutton') closebutton;
  userId: number;

  header: Header[] = [{title:"Nombre",id:"name"},{title:"Localizacion",id:"location"},{title:"Email",id:"email"}];
  hasServiceSkiMaterial = false;
  hasServiceHotel = false;
  hasServiceClasses = false;
  hasServiceCarRental = false;

  searchText;
  username: string;
  classes: Classes[];
  skiMaterial: SkiMaterial[];
  carRental: CarRental[];
  hotel: Hotel[];

  constructor(private enterpriseService: EnterpriseService, private classesService: ClassesService, private hotelService: HotelService, private skiMaterialService: SkiMaterialService, private carRentalService: CarRentalService) { }

  ngOnInit(): void {

    this.listAllServices();

    

  }

  listClassesUser(userId: number){
    this.classesService.getClassesListByUser(userId).subscribe(
      data => {
        this.classes = data._embedded.classes;

        if (this.classes.length != 0){
          this.hasServiceClasses = true;
        }
        
      }
    );

  }

  listHotelUser(userId: number){
    this.hotelService.getHotelListByUser(userId).subscribe(
      data => {
        this.hotel = data._embedded.hotel;
        if (this.hotel.length != 0 ){
          this.hasServiceHotel = true;
        }
      }
    );
  }

  listSkiMaterialUser(userId: number){
    this.skiMaterialService.getSkiMaterialListByUser(userId).subscribe(
      data => {
        this.skiMaterial = data._embedded.skiMaterial;

        if (this.skiMaterial.length != 0){
          this.hasServiceSkiMaterial = true;
        }
      }
    );

  }

  listCarRentalUser(userId: number){
    this.carRentalService.getCarRentalListByUser(userId).subscribe(
      data => {
        this.carRental = data._embedded.carRental;

        if (this.carRental.length != 0){
          this.hasServiceCarRental = true;
        }
      }
    );
  }

  listAllServices(){
    this.username = sessionStorage.getItem('AuthUsername');

    this.enterpriseService.getIdUsername(this.username).subscribe(
      data => {
        this.userId = data.id;

        this.listClassesUser(this.userId);
        this.listHotelUser(this.userId);
        this.listSkiMaterialUser(this.userId);
        this.listCarRentalUser(this.userId);

        

      }
    );
  }

  deleteHotelMessage: string = "";
  isDeleteHotelFail: boolean;
  submittedDeleteHotel: boolean = false;

  deleteHotel(id): void {

    this.submittedDeleteHotel = true;

    this.hotelService.desactiveHotel(id).subscribe(
      data => {
        this.isDeleteHotelFail = true;
        this.deleteHotelMessage = "Solicitud enviada";
        this.iterateChildrenButton();
        this.listAllServices();
      }, err => {
        this.isDeleteHotelFail = false;
        this.iterateChildrenButton();
        this.deleteHotelMessage = "La solicitud no se ha podido enviar";
      });

      setTimeout( () => { 
        this.submittedDeleteHotel = false;
        this.deleteHotelMessage = "";
       },3000);
  }

  deleteClassesMessage: string = "";
  isDeleteClassesFail: boolean;
  submittedDeleteClasses: boolean = false;

  deleteClass(id): void {

    this.submittedDeleteClasses = true;

    this.classesService.desactiveClass(id).subscribe(
      data => {
        this.isDeleteClassesFail = true;
        this.deleteClassesMessage = "Solicitud enviada";
        this.iterateChildrenButton();
        this.listAllServices();
      }, err => {
        this.isDeleteClassesFail = false;
        this.iterateChildrenButton();
        this.deleteClassesMessage = "La solicitud no se ha podido enviar";
      });

      setTimeout( () => { 
        this.submittedDeleteClasses = false;
        this.deleteClassesMessage = "";
       },3000);
  }

  deleteCarRentalMessage: string = "";
  isDeleteCarRentalFail: boolean;
  submittedDeleteCarRental: boolean = false;

  deleteCarRental(id): void {

    this.submittedDeleteCarRental = true;
    console.log(id)
    this.carRentalService.desactiveCarRental(id).subscribe(
      data => {
        this.isDeleteCarRentalFail = true;
        this.deleteCarRentalMessage = "Solicitud enviada";
        this.iterateChildrenButton()
        this.listAllServices();
      }, err => {
        this.iterateChildrenButton()
        this.isDeleteCarRentalFail = false;
        this.deleteCarRentalMessage = "La solicitud no se ha podido enviar";
      });

      setTimeout( () => { 
        this.submittedDeleteCarRental = false;
        this.deleteCarRentalMessage = "";
       },3000);
  }

  deleteSkiMaterialMessage: string = "";
  isDeleteSkiMaterialFail: boolean;
  submittedDeleteSkiMaterial: boolean = false;

  deleteSkiMaterial(id): void {

    this.submittedDeleteSkiMaterial = true;

    this.skiMaterialService.desactiveSkiMaterial(id).subscribe(
      data => {
        this.isDeleteSkiMaterialFail = true;
        this.deleteSkiMaterialMessage = "Servicio pasado a Inactivo";
        this.iterateChildrenButton();
        this.listAllServices();
      }, err => {
        this.isDeleteSkiMaterialFail = false;
        this.iterateChildrenButton();
        this.deleteSkiMaterialMessage = "La solicitud no se ha podido enviar";
      });

      setTimeout( () => { 
        this.submittedDeleteSkiMaterial = false;
        this.deleteSkiMaterialMessage = "";
       },3000);
  }


  iterateChildrenButton(){
    this.closebutton.forEach(element => {
      element.nativeElement.click();
    });
  }

}
