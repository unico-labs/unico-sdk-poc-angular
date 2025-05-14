import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DocumentCameraTypes,
  SelfieCameraTypes,
  UnicoCheckBuilder,
  UnicoThemeBuilder,
  SDKEnvironmentTypes,
  UnicoConfig
} from 'unico-webframe';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CamerasComponent implements OnInit {

  pathResources: string = '/assets/resources';
  pathModels: string = '/assets/models';
  pathUnicoConfigDefault: string = '/assets/unicoConfigDefault.json';
  pathUnicoConfigLiveness: string = '/assets/unicoConfig';

  config: object = new UnicoConfig()
    .setHostname("<YOUR_HOSTNAME>")
    .setHostKey("<YOUR_SDKKEY>");

  unicoBuilder: any = null;
  unicoTheme: any = null;
  callback: any;
  
  // Status messages
  statusMessage: string = '';
  statusType: 'success' | 'error' | 'info' | 'none' = 'none';

  constructor() { }

  ngOnInit(): void {
    this.initializeUnicoTheme();
    this.initializeUnicoBuilder();
    this.setupCallbacks();
  }

  private initializeUnicoTheme(): void {
    this.unicoTheme = new UnicoThemeBuilder()
      .setColorSilhouetteSuccess("#0384fc")
      .setColorSilhouetteError("#D50000")
      .setColorSilhouetteNeutral("#fcfcfc")
      .setBackgroundColor("#dff1f5")
      .setColorText("#0384fc")
      .setBackgroundColorComponents("#0384fc")
      .setColorTextComponents("#dff1f5")
      .setBackgroundColorButtons("#0384fc")
      .setColorTextButtons("#dff1f5")
      .setBackgroundColorBoxMessage("#fff")
      .setColorTextBoxMessage("#000")
      .setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)
      .build();
  }

  private initializeUnicoBuilder(): void {
    this.unicoBuilder = new UnicoCheckBuilder()
      .setTheme(this.unicoTheme)
      .setModelsPath(this.pathModels)
      .setResourceDirectory(this.pathResources)
      .setEnvironment(SDKEnvironmentTypes.UAT)
      .build();
  }

  private setupCallbacks(): void {
    this.callback = {
      on: {
        success: (obj: any) => {
          console.log('Success:', obj);
          this.setStatus('Success! Image captured successfully. Check console for details.', 'success');
        },
        error: (error: any) => {
          console.error('Error:', error);
          this.setStatus('Error occurred during capture. Please try again.', 'error');
        },
        support: (supportMessage: any) => {
          console.log('Support message:', supportMessage);
          this.setStatus('Support message received. Check console for details.', 'info');
        }
      }
    };
  }

  private setStatus(message: string, type: 'success' | 'error' | 'info' | 'none'): void {
    this.statusMessage = message;
    this.statusType = type;
    
    setTimeout(() => {
      this.statusMessage = '';
      this.statusType = 'none';
    }, 5000);
  }

  cameraLiveness(): void {
    this.setStatus('Initializing liveness camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareSelfieCamera(this.config, SelfieCameraTypes.SMART)
      .catch((error: any) => {
        console.error('Error initializing liveness camera:', error);
        this.setStatus('Failed to initialize liveness camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraDocument(): void {
    this.setStatus('Initializing document camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.CNH)
      .catch((error: any) => {
        console.error('Error initializing document camera:', error);
        this.setStatus('Failed to initialize document camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraDocumentCNHFront(): void {
    this.setStatus('Initializing CNH front camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.CNH_FRENTE)
      .catch((error: any) => {
        console.error('Error initializing CNH front camera:', error);
        this.setStatus('Failed to initialize CNH front camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraDocumentCNHBack(): void {
    this.setStatus('Initializing CNH back camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.CNH_VERSO)
      .catch((error: any) => {
        console.error('Error initializing CNH back camera:', error);
        this.setStatus('Failed to initialize CNH back camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraCPF(): void {
    this.setStatus('Initializing CPF camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.CPF)
      .catch((error: any) => {
        console.error('Error initializing CPF camera:', error);
        this.setStatus('Failed to initialize CPF camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraRGFront(): void {
    this.setStatus('Initializing RG front camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.RG_FRENTE)
      .catch((error: any) => {
        console.error('Error initializing RG front camera:', error);
        this.setStatus('Failed to initialize RG front camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraRGBack(): void {
    this.setStatus('Initializing RG back camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.RG_VERSO)
      .catch((error: any) => {
        console.error('Error initializing RG back camera:', error);
        this.setStatus('Failed to initialize RG back camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraRGFrontNew(): void {
    this.setStatus('Initializing new RG front camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.RG_FRENTE_NOVO)
      .catch((error: any) => {
        console.error('Error initializing new RG front camera:', error);
        this.setStatus('Failed to initialize new RG front camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraRGBackNew(): void {
    this.setStatus('Initializing new RG back camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.RG_VERSO_NOVO)
      .catch((error: any) => {
        console.error('Error initializing new RG back camera:', error);
        this.setStatus('Failed to initialize new RG back camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }

  cameraOthers(): void {
    this.setStatus('Initializing other documents camera...', 'info');
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.config, DocumentCameraTypes.OTHERS("Other Document"))
      .catch((error: any) => {
        console.error('Error initializing other documents camera:', error);
        this.setStatus('Failed to initialize other documents camera.', 'error');
      });
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => {
      if (cameraOpener) {
        cameraOpener.open(this.callback);
      }
    });
  }
}