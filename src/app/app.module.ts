import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { AuthGuard } from './services/guards/auth.guard';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    GoodsComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCgpOX9-dW3j3FrkN5popCQ15of7ZD_AWE",
      authDomain: "market-8d6a0.firebaseapp.com",
      databaseURL: "https://market-8d6a0.firebaseio.com",
      projectId: "market-8d6a0",
      storageBucket: "market-8d6a0.appspot.com",
      messagingSenderId: "1032259245609",
      appId: "1:1032259245609:web:12977db7593c5109"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule


  ],
  providers: [
    AuthGuard,
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
