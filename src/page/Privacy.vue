<template>
    <section class="privacy">
        <the-bottom>Privacy Policy</the-bottom>
        <div class="container">
            <div class="accordeon">

            
            <accordeon :title="'Terms'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'Authorization'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'Links'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'Site terms of use modifications'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'Governing law'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'How we treat your personal information'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            <accordeon :title="'Cookies'"
            :text="'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '" >
            </accordeon>
            </div>
        </div>
    </section>
</template>

<script>
import BottomHeaderVue from '../components/BottomHeader.vue'
import AccordeonVue from '../components/ui/Accordeon.vue';

export default{
    components:{
        'the-bottom': BottomHeaderVue,
        'accordeon': AccordeonVue
    }
}
</script>

<style lang="scss" scoped>
    .privacy{
        .accordeon{
            margin: 40px 0px;
        }
    }
</style>