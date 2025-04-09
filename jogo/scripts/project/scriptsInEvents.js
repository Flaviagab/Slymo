

const scriptsInEvents = {

	async FolhaDeEventos_fase1_Event2_Act3(runtime, localVars)
	{
		const slime = runtime.objects.slime.getFirstInstance();
		const maca = runtime.objects.maca.getFirstInstance();
		
		if (slime && maca && slime.testOverlap(maca)) {
		    if (runtime.globalVars.pontos >= 5) {
		        maca.destroy();
		        runtime.goToLayout("Fase2");
		   } else {
		    const aviso = runtime.objects.aviso?.getFirstInstance();
		    if (aviso) aviso.text = "Você precisa de 5 moedas para pegar a maçã!";
		}
		}
		
	},

	async FolhaDeEventos_gameover_Event2_Act1(runtime, localVars)
	{
		const numeroFase = runtime.globalVars.numeroFase;
		
		if (numeroFase === 1) {
		    runtime.goToLayout("Fase1");
		} else if (numeroFase === 2) {
		    runtime.goToLayout("Fase2");
		} else if (numeroFase === 3) {
		    runtime.goToLayout("Fase3");
		}
	},

	async FolhaDeEventos_fase2_Event2_Act3(runtime, localVars)
	{
		const slime = runtime.objects.slime.getFirstInstance();
		const morango = runtime.objects.morango.getFirstInstance();
		
		if (slime && morango && slime.testOverlap(morango)) {
		    if (runtime.globalVars.pontos >= 8) {
		        morango.destroy();
		        runtime.goToLayout("Fase3");
		    } else {
		    const alerta = runtime.objects.alerta?.getFirstInstance();
		    if (alerta) alerta.text = "Você precisa de 8 moedas para pegar o morango!";
		}
		}
		
	},

	async FolhaDeEventos_fase3_Event2_Act3(runtime, localVars)
	{
		const slime = runtime.objects.slime.getFirstInstance();
		const pessego = runtime.objects.pessego.getFirstInstance();
		
		if (slime && pessego && slime.testOverlap(pessego)) {
		    if (runtime.globalVars.pontos >= 10) {
		        pessego.destroy();
		        runtime.goToLayout("TelaWin");
		    } else {
		    const avisop = runtime.objects.avisop?.getFirstInstance();
		    if (avisop) avisop.text = "Você precisa de 10 moedas para pegar o pêssego!";
		}
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
