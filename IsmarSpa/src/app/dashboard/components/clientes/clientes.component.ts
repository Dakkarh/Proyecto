import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdService } from 'src/app/service/bd.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  table: string = 'users';
  columns: any[] = [
    {
      column: 'id',
      title: 'id'
    },
    {
      column: 'name',
      title: 'Nombre'
    },
    {
      column: 'lastName',
      title: 'Apellido'
    },
    {
      column: 'document',
      title: 'Documento'
    },
    {
      column: 'email',
      title: 'Correo electronico'
    },
    {
      column: 'date',
      title: 'Fecha de nacimiento'
    },
    {
      column: 'gender',
      title: 'Genero'
    },
  ];

  form: FormGroup;

  //---- update
  id: string = '';

  constructor(private formBuilder: FormBuilder, private bd: BdService) {
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
    });
  }

  //------------------------------------------- UPDATE ------------------------------------------
  getUpdateData(id: string) {
    this.id = id;
    this.bd.getUsersByID(id).subscribe((user: any) => {
      this.form.get('address')?.setValue(user.user.address);
    });
  }

  updateDataBD() {
    if (this.form.valid) {
      this.bd.updateUser({ id: this.id, address: this.form.get('address')?.value }).subscribe(
        (response) => {
          console.log('Usuario actualizado exitosamente', response);
          location.reload();
        },
        (error) => {
          console.error('Error al actualizar usuario', error);
        }
      );
    }
  }



}

